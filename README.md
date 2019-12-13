# ICY #14

Developed and pioneered by ICE students in the class of 2022, the chatbot serves as a utility tool that helps the users in several areas, such as automated accounting, productivity boosting, or informative operationing. The project originated from the fact that, before the existent of the bot, the creators had continuously facing daily struggles that potentially distract them from working seemlessly with others or staying on final-examination reading track. Occasionally, ones would need to contact their colleagues, but unable to find the contact info, or ones would felt disoriented and dismotivated. Therefore, the creators were aspired to find a solution to tackle the problem and came up with the idea.

## Getting started with development

First of all, in order to use this repository, please install Docker (https://www.docker.com/products/docker-desktop). With Docker installed, you can now simple follow the step below to begin developing.

1. Open `terminal` and `cd` to the root of this repositary.
2. Run `docker-compose up` in the terminal.
3. Wait for Docker to complete the process. (Could take up to a minute on the first run.)
4. Start developing and playing with the RabbitMQ. 
5. After finish developing, go to the same terminal you earlier and press `ctrl + c` to peacefully close the environment. 

> It is worth to note that the default username and password to access the RabbitMQ server is `lemon` and `12345` respectively. For example, those who use `amqp` library could use `amqp://lemon:12345@localhost:5672` as a connection url. (See examples in the folder `mq-test`.)
