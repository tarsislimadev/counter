FROM tmvdl/android:ionic

WORKDIR /app

RUN cordova create hello com.example.hello

WORKDIR /app/hello

RUN cordova platform add android

COPY ./www/build www

RUN cordova build android

CMD echo OK
