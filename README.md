# Airbnb Clone full responsive with map-gl

This is a fully responible clone of Airbnb website, I try to do the basic layout by Nextjs with tailwinds, I used mapbox and mapgl to do the map feature.
you can try it your self.

[ CLick me to the Demo ](https://airbnb-clone-clonglam.vercel.app/search?location=London&startDate=2022-08-01T07%3A00%3A00.000Z&endDate=2022-08-18T07%3A00%3A00.000Z&noOfGuest=3)

it may popout the web is not safe but it is normal, dont worry.

## Fully-responsive Mobile First
<img width="1429" alt="image" src="https://user-images.githubusercontent.com/86845927/182322176-713ddfc2-dbdc-49f2-91f5-19ded0bd4a11.png">
<img width="462" alt="image" src="https://user-images.githubusercontent.com/86845927/182324036-4711f945-ddb7-49e1-b80f-4137c8ba9a87.png">

Mobile first, People have spent more and more time on the internet from mobile ends. The website will show different layout depend on the width of the browser.

## map-gl
<img width="1911" alt="image" src="https://user-images.githubusercontent.com/86845927/182263506-dcf8cec2-a5e7-4075-b6be-cfa25b909a3c.png">
The Map feature help user to visualize the distribution of the rooms. The map need to pass a initial longitude and latitude, I first use a function to calculate a center point of those rooms, so that we can display a overview.


## Dynamic route
<img width="1230" alt="image" src="https://user-images.githubusercontent.com/86845927/182263735-cfe54992-da85-4eac-a55e-7b1b410b8344.png">
I use getStaticProps, but not the getserverside props since there are no realtime data that need to pass back to the server, I used getstaticprops to do the dynamic page.
The server will render pages of different rooms first, When the user selected the rooms that they want, It will route the user to the selected page in very low latency.


## What Can I do Next?
I think there are some improment, like adding 
1. a state management lib somehing like redux is a good idea
2. Third party payment system like strip
3. User login like Auth0
