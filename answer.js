const pillars = (numPill, dist, width) => {
  return numPill==1?0:(dist*(numPill-1)*100)+(width*(numPill-2))
}
