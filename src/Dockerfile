FROM tmvdl/android:ionic

RUN cordova telemetry off

WORKDIR /app

COPY ./www/build www

RUN cordova build android

CMD echo OK
