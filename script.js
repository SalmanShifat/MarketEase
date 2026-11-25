document.getElementById('nl').addEventListener('submit',function(e){e.preventDefault();this.reset();alert('Thanks for subscribing!')});
document.getElementById('q').addEventListener('keydown',function(e){if(e.key==='Enter')alert('Searching for: '+this.value)});
