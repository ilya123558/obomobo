const getIndex = (index: number) => {
  if(index > 3) {
    return getIndex(index - 4)
  }

  return index
}

export const getColorData = (i: number) => {
  let colorData = {  
    colorFrom: '#092253',
    colorTo: '#154CB9',
    containerColor: '#668CD8'
  }

  let index = getIndex(i)

  if(index === 0) {
    colorData = {  
      colorFrom: '#092253',
      colorTo: '#154CB9',
      containerColor: '#668CD8'
    }
  }

  if(index === 1) {
    colorData = {  
      colorFrom: '#8C6818',
      colorTo: '#F2B329',
      containerColor: '#FFE8B5'
    }
  }

  if(index === 2) {
    colorData = {  
      colorFrom: '#904610',
      colorTo: '#F6781C',
      containerColor: '#FFD6B9'
    }
  }

  if(index === 3) {
    colorData = {  
      colorFrom: '#5D2955',
      colorTo: '#C356B2',
      containerColor: '#EC9FE0'
    }
  }

  return colorData
};