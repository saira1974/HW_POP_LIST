document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
  
  const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', addArtist);
  
  
  
  });
  
  const addArtist = function(event) {
    event.preventDefault();
  
    const artist = event.target.artist.value;
    console.log(artist);
  
    const song = event.target.song.value;
    console.log(song);
  
    const decade = event.target.decade.value;
    console.log(decade);
  
    const popList = document.createElement('li');
      popList.textContent = `${artist} - ${song} (${decade})`
      const list = document.querySelector('#pop-list');
        list.appendChild(popList);
        event.target.reset();
  }