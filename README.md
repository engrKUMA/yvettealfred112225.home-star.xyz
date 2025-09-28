Alfred & Yvette - Our Wedding Website 💍
This repository contains the front-end code for the wedding invitation website of Alfred and Yvette. It is a single-page, fully responsive site built using pure HTML, CSS (inlined <style>), and vanilla JavaScript (inlined <script>).

✨ Key Features
Responsive Layout: Uses media queries for optimal display across mobile and desktop devices.

Aesthetic: Features a warm, custom color palette (--primary-color: #8b5a3c;) and custom typography (Playfair Display, Inter, and Alex Brush).

Sticky Header: The navigation bar is translucent at the top of the page and becomes opaque/darker upon scrolling.

Dynamic Countdown: A JavaScript function calculates and displays the time remaining until the event.

Image Slider: Includes a simple carousel for displaying formal invitations or key imagery.

RSVP Integration: Designed to embed an external form (e.g., Google Form or Typeform) via an <iframe>.

⚙️ Customization Guide
All elements can be edited directly within the index.html file.

1. Update Wedding Details
The critical date and time details are stored in two places: in the HTML structure for display, and in the JavaScript for the countdown logic.

Detail

HTML Location

JS Variable (Required for Countdown)

Names & Date

Search for Alfred & Yvette in the main hero section.

const weddingDate = new Date("November 9, 2025 15:00:00").getTime();

Location & Times

Search for Ceremony and Reception in the Event Details section.

N/A

2. Change Styling/Color Palette
The main color variables are defined in the <style> block within the <head>. To change the primary theme, update these CSS variables:

:root {
  --primary-color: #8b5a3c; /* Dark Brown */
  --secondary-color: #f4f1ea; /* Light Cream Background */
  --accent-color: #d4b896; /* Peach/Light Brown Accent */
  /* ... other colors */
}

3. Change RSVP Form Link
The RSVP section uses an <iframe> to embed a third-party form. You must replace the src attribute with your own form's embed link:

<!-- RSVP Section around Line 768 -->
<iframe src="YOUR_GOOGLE_FORM_EMBED_LINK_HERE" 
    width="100%" 
    height="1200" 
    frameborder="0" 
    marginheight="0" 
    marginwidth="0">
</iframe>

4. Image Assets
Ensure all images are correctly referenced. If you change the filenames or paths, update the corresponding src attributes throughout the HTML.

Hero Image: <section id="home"> background style.

Gallery Images: <section id="gallery"> elements use the classes gallery-item-x.

Slider Images: <div class="mySlides fade"> elements use src="./images/invitation-page-X.png".

🚨 Security & External Dependencies
Third-Party Analytics: Note that an external script for website tracking is included in the <head> of the document. If you do not intend to use this tracking service, it should be removed for privacy and performance:

<script async defer src="[https://tianji.home-star.xyz/tracker.js](https://tianji.home-star.xyz/tracker.js)"
    data-website-id="cmfusxdj40001qmar6r67y41r"></script>

Music Player: The website includes an <audio> element with multiple source options for background music. Ensure the files (canon-in-d.mp3 and .ogg) exist in the music/ folder to function correctly.