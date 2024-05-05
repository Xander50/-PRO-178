let latitude=37.0902,longitude=95.7129
mapboxgl.accessToken='pk.eyJ1IjoiYWxleGFuZGVyajIiLCJhIjoiY2x2bjJ4MWpuMDhqMzJpbXF3YzU0Ym1jeiJ9.U64VlGzqrHxWyfEwBfQJNw'
var map=new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom:4
});

map.addControl(
    new MapboxGeocoder({
        accessToken:mapboxgl.accessToken,
        mapboxgl:mapboxgl
    })
);

var img1= document.querySelector("#amber")
var marker1=new mapboxgl.Marker({
    element: img1
})
.setLngLat([75.8513,26.9855])
.addTo(map)

var img2= document.querySelector("#gateway")
var marker2=new mapboxgl.Marker({
    element: img2
})
.setLngLat([72.8347,18.9220])
.addTo(map)

var img3= document.querySelector("#gate")
var marker3=new mapboxgl.Marker({
    element: img3
})
.setLngLat([77.2295 ,28.6129 ])
.addTo(map)

var img4= document.querySelector("#lotus")
var marker4=new mapboxgl.Marker({
    element: img4
})
.setLngLat([77.2588,28.5535])
.addTo(map)

var img5= document.querySelector("#victoria")
var marker5=new mapboxgl.Marker({
    element: img5
})
.setLngLat([88.3426,22.5448])
.addTo(map)


