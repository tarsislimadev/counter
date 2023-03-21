FROM tmvdl/android:react-native as react

WORKDIR /app

COPY app .

RUN npm install

RUN npm run build

FROM tmvdl/android:ionic

RUN cordova telemetry off

WORKDIR /app

RUN cordova create counter com.brtmvdl.counter counter

WORKDIR /app/counter

COPY --from=react app/dist www

RUN cordova platform add android

RUN cordova build android
