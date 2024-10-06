const work = {
	title:'Tied',
	description:"This project is created based on user data downloaded from Amazon. Tied to consumption, I'm always moving, buying. The hologram displays all the things I purchased in the past 3 months. All of them play an important yet temporary role in my life. Movement of hair is based on duration of times I spent shopping, according to data collected by Amazon.",
	material: 'acrylic, synthetic hair, fishing string, arduino, screen',
	location: 'new york city',
	date:'oct 2024',
	video: "https://player.vimeo.com/video/1015745979?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
	image: ['IMG_1560.jpg','IMG_1557.jpg','IMG_1579.jpg','IMG_1587.jpg' ],
	tags:'data, kinetics',
	}


document.querySelector('.work-title').innerHTML = work.title; 
document.querySelector('.work-description').innerHTML = work.description;
document.querySelector('.work-material').innerHTML = work.material;
document.querySelector('.work-location').innerHTML = work.location;
document.querySelector('.work-date').innerHTML = work.date;
document.querySelector('.work-video').src = work.video;
work.image.forEach(image => {
	const img = document.createElement('img');
    img.src = `./images/${image}`;
    document.querySelector('.work-images').appendChild(img);
});
document.querySelector('.work-tags').innerHTML = work.tags;

