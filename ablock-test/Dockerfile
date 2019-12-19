FROM openjdk:8-jdk-alpine

VOLUME /tmp

ADD **/*.jar app.jar

RUN sh -c 'touch /app.jar'

ENV JAVA_OPTS="-XX:+UnlockExperimentalVMOptions -XX:+UseCGroupMemoryLimitForHeap"

EXPOSE 8080

CMD exec java -jar /app.jar