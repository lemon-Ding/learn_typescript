type LyricType={
    time:number,
    text:string
}

// 歌词解析工具：一般第三方库源码写上返回值类型一眼就知道下面的返回值    是数组类型并且数组里存放的是对象对象里包含time和text属性
function parseLyric(lyric:string):LyricType[]{
    const lyrics: LyricType[] = []
    lyrics.push({time:1111,text:"天青色等烟雨"})
    return lyrics
}

const lyricInfos = parseLyric("fasdsds")
for (const item of lyricInfos) {
    console.log(item.time,item.text);
}

export {}