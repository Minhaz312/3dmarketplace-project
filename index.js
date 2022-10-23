import LoadModel from './LoadModel.js'
const imageList = [
  { image: './modals/images/FishingBoat_004.jpg' },
  { image: './modals/images/FishingBoat_002.jpg' },
  { image: './modals/images/FishingBoat_001.jpg' },
  { image: './modals/images/FishingBoat_003.jpg' },
  { image: './modals/images/FishingBoat_005.jpg' },
  { image: './modals/images/FishingBoat_006.jpg' },
  { image: './modals/images/FishingBoat_007.jpg' },
  { image: './modals/images/wire.jpg' },
]

//Fishingboat,FisherW,substance,Tugboat,Estinguisher
// let fileLocation = './modals/Estinguisher.glb'
// let fileLocation = './modals/substance.glb'
// let fileLocation = './modals/Tugboat.glb'
// let fileLocation = './modals/BongSanRi_215.glb'
// let fileLocation = './modals/BongSanRi_217_a.glb'
// let fileLocation = './modals/FisherW.glb'
// let fileLocation = './modals/OilCan.glb'
let fileLocation = './modals/Fishingboat.glb'
// let fileLocation = './modals/gltf-modals/porsche_turbo/scene.gltf'
// let fileLocation = './modals/gltf-modals/buster_drone/scene.gltf'
// let fileLocation = './modals/gltf-modals/adamhead/adamhead.gltf'

LoadModel(imageList, fileLocation)
