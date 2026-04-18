function removeFav(btn){
  const card=btn.closest('.fav-card');
  card.style.opacity='0';
  card.style.transform='scale(0.95)';
  card.style.transition='all .3s';
  setTimeout(()=>card.remove(),300);
}