<br />
<p align="center">
  <a href="https://github.com/anilsenay/next-e-commerce">
    <img src="https://i.ibb.co/ZzG3GtN/index.png" alt="Header photo" >
  </a>

  <h3 align="center">E-Commerce Website</h3>
  
  <h4 align="center">Demo: <a href="https://next-e-commerce-example.vercel.app/">https://next-e-commerce-example.vercel.app/</a></h4>

  <p align="center">
    An e-commerce website example built with Next.js that I made in 1 week as a self challenge. There are some issues that I will handle later. Using Firebase as backend.
    <br />
    <br />
    <a href="https://twitter.com/anilsenay">Contact me</a>
    ·
    <a href="https://github.com/anilsenay/next-e-commerce/issues">Report Bug</a>
    ·
    <a href="https://github.com/anilsenay/next-e-commerce/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Screenshots](#screenshots)
  - [Home (News In)](#news-in)
  - [Categories](#categories)
  - [Product](#product)
  - [Cart](#cart)
  - [Account](#account)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Issues / Feature Plans](#issues---future-plans)
- [Contributing](#contributing)
- [Questions & Answers](#q--a)
- [License](#license)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

I saw a UI design on Dribbble by [Anton Mikhaltsov](https://dribbble.com/shots/9404340-Shop-Clothing-Web-Page). And I wanted to code this design. So I decided to make it a full working website with NextJS but in just 1 week as challenge myself. Some issues are still there but I will check out them later.

- Filter and Sort buttons are not working yet.
- ~~Website is not responsive %100 because of time was not enought. I am working on it currently.~~ Now, it is responsive.
- Firebase functions could be better
- Home page(News In) cards has no redirects. They are just placeholders.

### Built With

- [React](https://reactjs.org)
- [NextJS](https://nextjs.org/)
- [Firebase](https://firebase.google.com/docs/web/setup)
- [React Hook Form](https://react-hook-form.com/)
- [date-fns](date-fns.org/)
- [Sass](https://sass-lang.com/)

<!-- Screens -->

## Screenshots

### News In

![Home Image](https://i.ibb.co/ZzG3GtN/index.png)
- Cards has no links and they are static, they are just placeholders.

### Categories

![Categories Image](https://i.ibb.co/ScCBXDZ/index2.png)

### Product

![Product Image](https://i.ibb.co/mbsd2Y1/index5.png)

### Cart

![Cart Image](https://i.ibb.co/svHtw0H/index3.png)

### Account

![Account Image](https://i.ibb.co/JcR3x7F/index4.png)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) version 10.13 or later
- [Git](https://git-scm.com/) (I used 2.20.1)

### Installation

1. You need to create a firebase project

2. Clone the repo and change the directory

```sh
git clone https://github.com/anilsenay/next-e-commerce.git
cd next-e-commerce
```

3. Install NPM packages

```sh
npm install
```

4. Create your .env.local file on root folder(next-e-commerce) with this content. Put your firebase keys.

```
NEXT_PUBLIC_FIREBASE_API_KEY = your-firebase-api-key
NEXT_PUBLIC_FIREBASE_PROJECT_ID = your-firebase-project-id
NEXT_PUBLIC_FIREBASE_APP_ID = your-firebase-app-id
```

5. Run in development mode

```sh
npm run dev
```

<!-- Issues / Future plans -->

## Issues - Future plans

- Filter and Sort buttons
- Optimize firestore query functions
- On cart page, decrease item button is not working
- ~~Website will be %100 responsive~~
- Replace some HTML tags with semantic tags

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- Q & A -->

## Q & A

- Question: I created Firebase project but I do not familiar with it. What should I do then?
  **Answer**: You can contact me about setting your Firebase project, I would gladly help you.

- Question: I created Firebase project but I do not have database structure. What should I do then?
  **Answer**: Please contact me to get database structure I created.

- Question: Why did not you share your database structure?
  **Answer**: I just want to know if someone is interest in this project :D

- Question: How can I contribute?
  **Answer**: It makes me happy even if you just star this project. For code [contributes](#contributing), you can fork the repo and open a pull request after your changes. Any feedback is also important for me. You can open issue or send me message.

- Question: Did you design UI?
  **Answer**: No, I did not design actually. I found home page design on Dribbble by [Anton Mikhaltsov](https://dribbble.com/shots/9404340-Shop-Clothing-Web-Page). Except home page, other UI choices is mine. While I made this website in limited time, I did not think on UI/UX a lot. So you can also feedback me about design.

<!-- LICENSE -->

## License

Distributed under the GPL License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

[@anilsenay](https://twitter.com/anilsenay)

Project Link: [https://github.com/anilsenay/next-e-commerce](https://github.com/anilsenay/next-e-commerce)
