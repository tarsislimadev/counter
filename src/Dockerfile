FROM tmvdl/android:ionic

WORKDIR /app

COPY ./www/build www

RUN cordova build android

CMD echo OK
