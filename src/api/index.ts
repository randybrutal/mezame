import requestFlickr from '@/api/requestFlickr'; // 引入封裝好的axios

const param = {
    user_id: '192557662@N05',
    api_key: '0118739b4b2355a8271ad2c3b6655cbb',
    format: 'json',
    nojsoncallback: 1
};
// 取相簿
export const getAlbum = (paramCell: any) => requestFlickr({
    method: 'get',
    params: {
        method: 'flickr.photosets.getList',
        ...param,
        ...paramCell
    }
});

// 依相簿取照片
export const getAlbumPhotoList = (paramCell: any) => requestFlickr({
    method: 'get',
    params: {
        method: 'flickr.photosets.getPhotos',
        ...param,
        ...paramCell
    }
});

// 取全部照片
export const getAllPhoto = (paramCell: any) => requestFlickr({
    method: 'get',
    params: {
        method: 'flickr.photos.search',
        ...param,
        ...paramCell
    }
});

// 取照片資訊
export const getAllContext = (paramCell: any) => requestFlickr({
    method: 'get',
    params: {
        method: 'flickr.photos.getAllContexts',
        ...param,
        ...paramCell
    }
});

// 取得影片資訊 51085366482
export const getStream = (paramCell: any) => requestFlickr({
    method: 'get',
    params: {
        method: 'flickr.video.getStreamInfo',
        ...param,
        ...paramCell
    }
});
