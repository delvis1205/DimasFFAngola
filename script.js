body {
    font-family: Arial, sans-serif;
    background-color: #141414; /* Cor de fundo escura similar ao Free Fire */
    color: #f5f5f5;
    margin: 0;
    padding: 0;
}

header {
    background-color: #f7c600; /* Cor amarela padrão do Free Fire */
    color: #000;
    text-align: center;
    padding: 20px;
}

main {
    padding: 20px;
}

.diamond-selection {
    margin-bottom: 20px;
}

.diamond-options {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.diamond-option {
    background-color: #333;
    border: 2px solid #f7c600;
    border-radius: 10px;
    padding: 15px;
    width: calc(33.333% - 20px);
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s;
}

.diamond-option:hover {
    background-color: #444;
}

.game-bubble {
    background-color: #f7c600;
    color: #000;
    border-radius: 15px;
    display: inline-block;
    padding: 5px 10px;
    margin-top: 10px;
}

.order-form {
    background-color: #333;
    border: 2px solid #f7c600;
    border-radius: 10px;
    padding: 20px;
}

.order-form label {
    display: block;
    margin-bottom: 10px;
}

.order-form input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
}

.payment-methods {
    margin-bottom: 20px;
}

.payment-methods label {
    display: block;
    margin-bottom: 5px;
}

button {
    background-color: #f7c600;
    color: #000;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #e0a700;
}

footer {
    background-color: #000;
    color: #f5f5f5;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
}
