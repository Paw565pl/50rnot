# 50rnot

### What is it?

It is a web app for predicting if your yearly income exceeds 50k $ or not. It uses tensorflow model under the hood for making predictions based on user's input. Model was trained on [this](https://www.kaggle.com/datasets/uciml/adult-census-income) dataset. Results are served to the end user via web server and displayed in the browser by the react app.

### Tech stack

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white)

### How to run it locally?

It is fairly simple thanks to docker. Simply run this command after **cloning the repository**.

```bash
docker compose up --build
```

That's all! Now simply hit [http://localhost:8080](http://localhost:8080) and explore.
