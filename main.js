function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((sum, x) => sum + x, 0) / classPoints.length < yourPoints
  }
  