import * as THREE from '/three.module.js'
import { OrbitControls } from './OrbitControls.js'
import { GLTFLoader } from './GLTFLoader.js'

export default function modalLoader(fileLocation, extension) {
  const clock = new THREE.Clock()
  let animation
  let mixer
  const backgroundColor = new THREE.Color().set('rgb(43, 43, 43)')
  let modalContainer = document.getElementById('modal-container')
  let canvas = document.querySelector('#modal')
  const scene = new THREE.Scene()
  const containerRatio = modalContainer.clientWidth / modalContainer.clientHeight;
  const camera = new THREE.PerspectiveCamera(
    30,
    modalContainer.clientWidth / modalContainer.clientHeight,
    0.1,
    1000,
  )
  const renderer = new THREE.WebGL1Renderer({
    canvas: canvas,
    antialias: true,
  })
  const controls = new OrbitControls(camera, renderer.domElement)

  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(modalContainer.clientWidth, modalContainer.clientHeight)
  renderer.shadowMap.enabled = true
  // renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.outputEncoding = THREE.sRGBEncoding
  camera.position.set(0, -0.09, 1)

  scene.translateY(-0.001)
  scene.castShadow = true

  renderer.render(scene, camera)

  const loader = new GLTFLoader()

  loader.load(
    fileLocation,
    function (glb) {
      const model = glb.scene
      // model.traverse((c) => {
      //   c.castShadow = true
      // })

      camera.position.x = -0.5
      camera.position.y = 0.1

      var rotation = false

      // document
      //   .getElementsByClassName('slider-image')[0]
      //   .addEventListener('mouseover', () => {
      //     rotation = true
      //   })

      // modal sizing and scaling

      const box = new THREE.Box3().setFromObject(model)
      var size = new THREE.Vector3()
      box.getSize(size)
      var center = new THREE.Vector3()
      box.getCenter(center)

      let scale = Math.min(1.0 / size.x, 1.0 / size.y, 1.0 / size.z) //modalContainer.clientHeight / modalContainer.clientWidth

      console.log('size: ', size)

      if (size.y > 15) {
        scale = scale / 2.5
      } else {
        scale = scale / 1.5
      }

      if ((size.y < size.x) & (window.innerWidth < 768)) {
        scale = scale / 2.5
      }

      model.scale.setScalar(scale)

      model.position.sub(center.multiplyScalar(scale))

      scene.background = new THREE.Color('rgb(200,200,200)')

      const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(1000000, 1000000),
        new THREE.MeshStandardMaterial({
          color: backgroundColor,
        }),
      )

      plane.castShadow = false
      plane.rotation.x = -Math.PI / 2

      if (extension == 'gltf') {
        plane.position.y = -size.y
        plane.receiveShadow = false
      } else {
        plane.receiveShadow = true
        plane.position.y = -size.y / 3
      }
      // if (size.y < 1) {
      //   plane.position.y = -size.y
      // } else {
      //   plane.translateY(0) //-(size.y * (1 / size.y))
      // }

      // model.add(plane)

      console.log('animations: ', glb)

      scene.add(model)

      animation = false
      mixer
      if (glb.animations.length > 0) {
        console.log('animation available')
        animation = true
        mixer = new THREE.AnimationMixer(model)
        mixer.clipAction(glb.animations[0]).play()
      }

      document
        .getElementById('modal-container')
        .addEventListener('mouseover', () => {
          document.getElementById('modal-container').style.cursor = 'grab'
        })
      document
        .getElementById('modal-container')
        .addEventListener('mousedown', () => {
          document.getElementById('modal-container').style.cursor = 'grabbing'
        })
      document
        .getElementById('modal-container')
        .addEventListener('mouseup', () => {
          document.getElementById('modal-container').style.cursor = 'grab'
        })
      document
        .getElementById('modal-container')
        .addEventListener('mouseout', () => {
          document.getElementById('modal-container').style.cursor = 'normal'
        })

      function animateGLB() {
        if (rotation == true) {
          var timer = Date.now() * 0.001
          camera.position.x = Math.cos(timer) * 10
          camera.position.z = Math.sin(timer) * 10
          camera.lookAt(scene.position)
        }
        requestAnimationFrame(animateGLB)

        controls.update()
        renderer.render(scene, camera)
      }
      // animateGLB()
    },
    function (progress) {
      let progressDiv = document.getElementById('progress')
      canvas.style.display = 'none'

      progressDiv.style.display = 'flex'
      progressDiv.style.height = '100%'
      progressDiv.style.width = '100%'
      let total = progress.total
      let loaded = progress.loaded

      let loadedPercentage = Math.round((loaded / total) * 100)
      progressDiv.innerText = `Loaded ${loadedPercentage}%`
      if (loadedPercentage === 100) {
        progressDiv.style.display = 'none'
        canvas.style.display = 'block'
      }
    },
    function (error) {
      console.log('glb load error: ', error)
    },
  )
  const topDirlight = new THREE.DirectionalLight(0xffffff, 1)
  const frontDirlight = new THREE.DirectionalLight(0xffffff, 1)
  const backDirLight = new THREE.DirectionalLight(0xffffff, 1)
  const ambientLight = new THREE.AmbientLight(0xffffff, 1)

  ambientLight.position.set(0, 0.5, 3)

  topDirlight.position.set(-5, 5, 10) //0.5, 5, 0
  frontDirlight.position.set(5, 5, 10)
  backDirLight.position.set(0, 1, -10)

  // topDirlight.castShadow = true
  // frontDirlight.castShadow = true
  // backDirLight.castShadow = true

  scene.add(topDirlight)
  scene.add(frontDirlight)
  scene.add(backDirLight)
  scene.add(ambientLight)

  // planes start

  const rightPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(1000000, 1000000, 10, 10),
    new THREE.MeshStandardMaterial({
      color: backgroundColor,
      side: THREE.DoubleSide,
    }),
  )
  rightPlane.castShadow = false
  rightPlane.receiveShadow = true
  rightPlane.rotation.y = -Math.PI / 2
  rightPlane.position.x = -50
  rightPlane.rotation.x = 100
  // scene.add(rightPlane)

  const leftPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(1000000, 1000000, 10, 10),
    new THREE.MeshStandardMaterial({
      color: backgroundColor,
      side: THREE.DoubleSide,
    }),
  )
  leftPlane.castShadow = false
  leftPlane.receiveShadow = true
  leftPlane.rotation.y = Math.PI / 3
  leftPlane.position.x = 40
  rightPlane.rotation.x = 100
  // scene.add(leftPlane)

  const frontPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(1000000, 1000000, 10, 10),
    new THREE.MeshStandardMaterial({
      color: backgroundColor,
      side: THREE.DoubleSide,
    }),
  )
  frontPlane.castShadow = false
  frontPlane.receiveShadow = true
  frontPlane.rotation.y = -Math.PI / 3
  frontPlane.position.x = 45
  rightPlane.rotation.x = 100
  // scene.add(frontPlane)

  // planes end

  window.addEventListener('resize', function (e) {
    camera.aspect = window.innerWidth / window.innerHeight
    // modalContainer.clientWidth, modalContainer.clientHeight
    renderer.setSize(modalContainer.clientWidth, modalContainer.clientHeight)
    // renderer.setSize(window.innerWidth, modalContainer.clientHeight)
  })

  function animate() {
    requestAnimationFrame(animate)
    controls.update()
    if (animation == true) {
      const delta = clock.getDelta()
      mixer.update(delta)
    }
    renderer.render(scene, camera)
  }
  animate()
}
