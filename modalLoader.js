import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default function modalLoader(fileLocation, extension) {
  const clock = new THREE.Clock()
  let animation
  let mixer
  const backgroundColor = new THREE.Color().set('rgb(43, 43, 43)')
  let modalContainer = document.getElementById('modal-container')
  let canvas = document.querySelector('#modal')
  const scene = new THREE.Scene()
  scene.background = backgroundColor
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
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
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
      model.traverse((c) => {
        c.castShadow = true
      })

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
        scale = scale / 2
      } else {
        scale = scale / 1.2
      }

      if ((size.y < size.x) & (window.innerWidth < 768)) {
        scale = scale / 2
      }

      model.scale.setScalar(scale)

      model.position.sub(center.multiplyScalar(scale))

      scene.background = new THREE.Color(backgroundColor)

    

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

  topDirlight.castShadow = true
  frontDirlight.castShadow = true
  backDirLight.castShadow = true

  scene.add(topDirlight)
  scene.add(frontDirlight)
  scene.add(backDirLight)
  scene.add(ambientLight)


  window.addEventListener('resize', function (e) {
    camera.aspect = window.innerWidth / window.innerHeight
    renderer.setSize(window.innerWidth, modalContainer.clientHeight)
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
