import modalLoader from './modalLoader'
import './glider.min.js'
export default function LoadModel(imageList, fileLocation) {
  const imageSlider = document.getElementById('image-slider')

  let modelContainer = document.getElementById('modal-container')

  for (let i = 0; i < imageList.length; i++) {
    const imageLocationArray = imageList[i].image.split('/')
    const imageName = imageLocationArray[imageLocationArray.length - 1]
    const sliderImage = document.createElement('img')
    const modelImage = document.createElement('img')
    const imgContainer = document.createElement('div')
    const badge = document.createElement('div')
    badge.innerText = '360'
    badge.style.color = 'yellow'
    badge.style.position = 'absolute'
    badge.style.height = '20px'
    badge.style.width = '20px'
    badge.style.fontWeight = 'bold'
    badge.style.right = '15px'
    badge.style.top = '5px'
    badge.classList.add('rotationDegBadge')

    imgContainer.style.position = 'relative'
    imgContainer.style.padding = '5px'
    imgContainer.style.height = '200px'
    imgContainer.style.display = 'inline-block'

    modelImage.setAttribute('data-name', imageName)
    modelImage.alt = imageName

    modelImage.src = imageList[i].image
    modelImage.style.display = 'none'
    modelImage.style.height = '100%'
    modelImage.style.width = '100%'
    modelImage.style.objectFit = 'cover'

    sliderImage.setAttribute('data-name', imageName)
    sliderImage.alt = imageName
    sliderImage.src = imageList[i].image
    sliderImage.style.display = 'inline-block'
    sliderImage.style.height = '100%'
    sliderImage.style.width = '100%'
    sliderImage.style.objectFit = 'cover'
    if (i == 0) {
      document.getElementById('modal').setAttribute('data-index', i)
      sliderImage.classList.add('slider-image')
      sliderImage.classList.add('active-slider')
      document.getElementById('modal').classList.add('model-image')
      document.getElementById('modal').classList.add('active-model')
      imgContainer.append(badge)
      imgContainer.append(sliderImage)
      imageSlider.append(imgContainer)
      // modelContainer.append(modelImage)
    } else {
      modelImage.setAttribute('data-index', i)
      sliderImage.classList.add(`slider-image`)
      modelImage.classList.add(`model-image`)
      modelImage.style.display = 'none'
      imgContainer.append(sliderImage)
      imageSlider.append(imgContainer)
      modelContainer.append(modelImage)
    }
  }

  const renderedSliderImageList = document.getElementsByClassName(
    'slider-image',
  )

  const fileDetailsArray = fileLocation.split('.')
  let extension = fileDetailsArray[fileDetailsArray.length - 1].toLowerCase()
  let clicked = false

  for (let i = 0; i < renderedSliderImageList.length; i++) {
    console.log('i ',i);
    renderedSliderImageList[i].addEventListener('click', (e) => {
      carouselNext.setAttribute('data-current-id', i)
      carouselPrev.setAttribute('data-current-id', i)
      let imageName = renderedSliderImageList[i].getAttribute('data-name')
      console.log('selected imageName: ', imageName)
      let imageNameArray = imageName.split('.')
      extension = imageNameArray[imageNameArray.length - 1]
      clicked = true
      // slider image control
      const activeSlider = document.getElementsByClassName('active-slider')[0]
      const activeModel = document.getElementsByClassName('active-model')[0]
      activeModel.style.display = 'none'
      activeModel.classList.remove('active-model')
      activeSlider.classList.remove('active-slider')
      const nextModel = document.getElementsByClassName('model-image')[i]
      const nextSlider = document.getElementsByClassName('slider-image')[i]
      if (i == 0) {
        document.getElementById('modal').style.display = 'inline-block'
        document.getElementById('modal').classList.add('active-model')
        nextSlider.classList.add('active-slider')
      } else {
        nextModel.classList.add('active-model')
        nextSlider.classList.add('active-slider')
        nextModel.style.display = 'inline-block'
      }
    })
  }

  const carouselPrev = document.createElement('button')
  const carouselPrevIcon = document.createElement('i')
  const carouselNext = document.createElement('button')
  const carouselNextIcon = document.createElement('i')

  carouselNextIcon.classList.add('fa')
  carouselNextIcon.classList.add('fa-angle-right')
  carouselNext.append(carouselNextIcon)

  carouselPrevIcon.classList.add('fa')
  carouselPrevIcon.classList.add('fa-angle-left')
  carouselPrev.append(carouselPrevIcon)

  document.getElementsByClassName('carousel-controls')[0].append(carouselPrev)
  document.getElementsByClassName('carousel-controls')[0].append(carouselNext)

  carouselNext.addEventListener('click', () => {
    const activeSlider = document.getElementsByClassName('active-slider')[0]
    const activeModel = document.getElementsByClassName('active-model')[0]
    let id = activeModel.getAttribute('data-index')

    if (Number(id) != renderedSliderImageList.length - 1) {
      activeModel.style.display = 'none'
      activeModel.classList.remove('active-model')
      activeSlider.classList.remove('active-slider')
      const nextModel = document.getElementsByClassName('model-image')[
        Number(id) + 1
      ]
      const nextSlider = document.getElementsByClassName('slider-image')[
        Number(id) + 1
      ]
      if (Number(id) == 0) {
        document.getElementById('modal').style.display = 'none'
        document.getElementById('modal').classList.remove('active-model')
        nextSlider.classList.add('active-slider')
        nextModel.classList.add('active-model')
        nextModel.style.display = 'inline-block'
      } else {
        nextModel.classList.add('active-model')
        nextSlider.classList.add('active-slider')
        nextModel.style.display = 'inline-block'
      }
    }
  })
  carouselPrev.addEventListener('click', () => {
    // let index = data-gslide

    const activeSlider = document.getElementsByClassName('active-slider')[0]
    const activeModel = document.getElementsByClassName('active-model')[0]
    let id = activeModel.getAttribute('data-index')
    if (Number(id) == 0) {
      id = 0
      document.getElementById('modal').style.display = 'inline-block'
      document.getElementById('modal').classList.add('active-model')
    } else {
      activeModel.style.display = 'none'
      activeModel.classList.remove('active-model')
      activeSlider.classList.remove('active-slider')
      const nextModel = document.getElementsByClassName('model-image')[
        Number(id) - 1
      ]
      const nextSlider = document.getElementsByClassName('slider-image')[
        Number(id) - 1
      ]
      if (Number(id) == 0) {
        document.getElementById('modal').style.display = 'none'
        document.getElementById('modal').classList.remove('active-model')
        nextSlider.classList.add('active-slider')
        nextModel.classList.add('active-model')
        nextModel.style.display = 'inline-block'
      } else {
        nextModel.classList.add('active-model')
        nextSlider.classList.add('active-slider')
        nextModel.style.display = 'inline-block'
      }
    }
  })

  if (clicked == false) {
    console.log('clicked false now')
    modalLoader(fileLocation, extension)
    // document.getElementsByClassName('model-image')[0].style.display =
    //   'inline-block'
  }

  document
    .querySelector('.glider')
    .addEventListener('glider-slide-visible', function (event) {
      var glider = Glider(this)
      console.log('Slide Visible %s', event.detail.slide)
    })
  document
    .querySelector('.glider')
    .addEventListener('glider-slide-hidden', function (event) {
      console.log('Slide Hidden %s', event.detail.slide)
    })
  document
    .querySelector('.glider')
    .addEventListener('glider-refresh', function (event) {
      console.log('Refresh')
    })
  document
    .querySelector('.glider')
    .addEventListener('glider-loaded', function (event) {
      console.log('Loaded')
    })

  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1, //'auto',
    slidesToScroll: 1,
    itemWidth: 200,
    draggable: false,
    scrollLock: false,
    rewind: false,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next',
    },
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToScroll: 'auto',
          itemWidth: 100,
          slidesToShow: 'auto',
          exactWidth: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 3,
          arrows: true,
          scrollLock: false,
        },
      },
    ],
  })

  // const nextSliderControlBtn = document.getElementById('nextSlider')
  // const previousSliderControlBtn = document.getElementById('previousSlider')

  // const activeSlider = document.getElementsByClassName('active-slider')[0]
  // const SliderContainer = document.getElementById('slider-container')
  // const sliderImage = document.getElementById('image-slider')

  // let totalSliderImage = document.getElementsByClassName('slider-image')

  // let totalSliderContainerWidth = 0

  // for (let i = 0; i < totalSliderImage.length; i++) {
  //   console.log('number of item: ', i + 1)
  //   totalSliderContainerWidth += totalSliderImage[0].clientWidth + 10
  // }

  // const sliderContainerWidth = document.getElementsByClassName(
  //   'slider-container',
  // )[0].clientWidth

  // let counter = 1
  // nextSliderControlBtn.addEventListener('click', () => {
  //   console.log(
  //     'totalSliderContainerWidth > imageSlider.clientWidth: ',
  //     totalSliderContainerWidth,
  //     imageSlider.clientWidth,
  //   )
  //   sliderImage.style.transition = '0.33s'
  //   if (totalSliderContainerWidth > imageSlider.clientWidth) {
  //     console.log('counter, totalImage: ', counter, totalSliderImage.length)
  //     sliderImage.style.transform = `translateX(-${
  //       imageSlider.clientWidth * counter
  //     }px)`

  //     counter++
  //   } else {
  //     sliderImage.style.transform = `translateX(-${
  //       totalSliderContainerWidth - imageSlider.clientWidth
  //     }px)`
  //   }
  // })

  // previousSliderControlBtn.addEventListener('click', () => {
  //   sliderImage.style.transition = '0.33s'
  //   if (totalSliderContainerWidth > imageSlider.clientWidth) {
  //     counter--
  //     sliderImage.style.transform = `translateX(-${
  //       imageSlider.clientWidth * counter
  //     }px)`
  //   } else {
  //     sliderImage.style.transform = `translateX(${0}px)`
  //   }
  // })
}
