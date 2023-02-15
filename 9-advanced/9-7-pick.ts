{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    type VideoMetadata = Pick<Video, 'id' | 'title'>;

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'https://..',
            data: 'byte-data..',
        };
    }
    function getvideoMetadata(id: string): VideoMetadata {
        return {
            id: id,
            title: 'title',
        };
    }
}