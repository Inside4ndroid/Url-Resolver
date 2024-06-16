<h2 align='center'>Javascript URL Resolver ✨</h2>

<p align="center">
<a href="https://github.com/Inside4ndroid"><img title="Author" src="https://img.shields.io/badge/Author-Inside4ndroid-purple.svg?style=for-the-badge&logo=github"></a>
</p>
<br>

<p align="center">
<span style='font-size: 19px'>
A URL Resolver for embed host and websites. This will start off very small but will be a continued project and constantly updated with new hosts.
</span>
</p>
<br>

<h2 align='center'>Installation</h2>
<br>

```sh

# Clone the repo
$ git clone git clone https://github.com/Inside4ndroid/Url-Resolver.git

# Go to the repository
$ cd cd Url-Resolver

# Install packages
$ npm install

# Run the project
$ npm run dev

# To access API Open any browser/API Testing tool & move to the given URL
`http://your-ip-or-domain.com:3000?url=your-url-to-be-resolved`

```

<br>

---

<h2 align='center'>Supported Sites</h2>
<br>

|    Website         |              Url Example                                                              | Required Headers      |
| :------------:     |  :--------------------------:                                                         | :-------:             |
| Amazon Cloudrive   |  https://www.amazon.com/clouddrive/share/media-id                                     |     ❌               |
| AmdaHost           |  https://www.amdahost.com/watch.php?id=media-id                                       |     ❌               |
| Anafast            |  https://anafasts.com/media-id.html / https://anafasts.com:2096/media-id.html         |     ❌               |
| AniStream          |  https://www.ani-stream.com/embed-media-id.html / https://www.ani-stream.com/media-id |     ❌               |
| Archive            |  https://archive.org/embed/media-id                                                   |     ❌               |
| Bitchute           |  https://www.bitchute.com/video/media-id                                              |     ❌               |
| Brighteon          |  https://www.brighteon.com/media-id                                                   |     ❌               |
| Brplayer           |  https://watch.brplayer.site/watch?v=media-id                                         |     Referer          |
| DailyMotion        |  https://www.dailymotion.com/video/media-id                                           |     ❌               |

---

<h2 align='center'>Get in Touch</h2>
<br>

<p align="center">
<span style='font-size: 19px'>
Feel free to reach out! Let's connect and collaborate. <br><br><img src="https://img.shields.io/badge/Email-support@i4studio.co.uk-purple.svg?logo=data:image/svg%2bxml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDc1LjI5NCA3NS4yOTQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIj48L2c+PGcgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L2c+PGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPiA8Zz4gPHBhdGggZD0iTTY2LjA5NywxMi4wODloLTU2LjlDNC4xMjYsMTIuMDg5LDAsMTYuMjE1LDAsMjEuMjg2djMyLjcyMmMwLDUuMDcxLDQuMTI2LDkuMTk3LDkuMTk3LDkuMTk3aDU2LjkgYzUuMDcxLDAsOS4xOTctNC4xMjYsOS4xOTctOS4xOTdWMjEuMjg3Qzc1LjI5NSwxNi4yMTUsNzEuMTY5LDEyLjA4OSw2Ni4wOTcsMTIuMDg5eiBNNjEuNjAzLDE4LjA4OUwzNy42NDcsMzMuNTIzTDEzLjY5MSwxOC4wODkgSDYxLjYwM3ogTTY2LjA5Nyw1Ny4yMDZoLTU2LjlDNy40MzQsNTcuMjA2LDYsNTUuNzcxLDYsNTQuMDA5VjIxLjQ1N2wyOS43OTYsMTkuMTZjMC4wNCwwLjAyNSwwLjA4MywwLjA0MiwwLjEyNCwwLjA2NSBjMC4wNDMsMC4wMjQsMC4wODcsMC4wNDcsMC4xMzEsMC4wNjljMC4yMzEsMC4xMTksMC40NjksMC4yMTUsMC43MTIsMC4yNzhjMC4wMjUsMC4wMDcsMC4wNSwwLjAxLDAuMDc1LDAuMDE2IGMwLjI2NywwLjA2MywwLjUzNywwLjEwMiwwLjgwNywwLjEwMmMwLjAwMSwwLDAuMDAyLDAsMC4wMDIsMGMwLjAwMiwwLDAuMDAzLDAsMC4wMDQsMGMwLjI3LDAsMC41NC0wLjAzOCwwLjgwNy0wLjEwMiBjMC4wMjUtMC4wMDYsMC4wNS0wLjAwOSwwLjA3NS0wLjAxNmMwLjI0My0wLjA2MywwLjQ4LTAuMTU5LDAuNzEyLTAuMjc4YzAuMDQ0LTAuMDIyLDAuMDg4LTAuMDQ1LDAuMTMxLTAuMDY5IGMwLjA0MS0wLjAyMywwLjA4NC0wLjA0LDAuMTI0LTAuMDY1bDI5Ljc5Ni0xOS4xNnYzMi41NTFDNjkuMjk1LDU1Ljc3MSw2Ny44Niw1Ny4yMDYsNjYuMDk3LDU3LjIwNnoiPjwvcGF0aD4gPC9nPiA8L2c+PC9zdmc+"> <br><br> <img src="https://img.shields.io/twitter/follow/:Inside_4ndroid">
</span>
</p>

---
<br>
<h2 align='center'>Hire Me</h2>
<br>

<p align="center">
<span style='font-size: 19px'>
👀 Currently FOR HIRE.<br><br>If you have an interesting opportunity, I'd love to hear about it!
</span>
</p>

---
<br>
<p align="center">
<span style='font-size: 19px'>
Thank you for visiting! Hope to see you again soon. 😊
</span>
</p>