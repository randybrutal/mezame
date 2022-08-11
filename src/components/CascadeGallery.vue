<template lang="pug">
    div.cascade-page(:style="'width: '+pageWidth+';'")
        div.cascade-bar(
            v-for="(val, i) in barNumber"
            :style="'width:'+barWidth+';'"
        )
            div.cascade-bar-content
                div.img-block(
                    v-for="(item,index) in imgData"
                    v-show="index % barNumber == i"
                    :key="item.id"
                )
                    img(
                        :src="item.src" width="100%"
                        @click="getAlbumId(item.id)"
                    )
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Prop } from 'vue-property-decorator';
import { getAllContext } from '@/api/index';

@Component
export default class CascadeGallery extends Vue {
    @Prop({
        type: String,
        default: '80%'
    })
    protected readonly pageWidth!: any;

    @Prop({
        type: Number,
        default: 4,
        validator: value => value > 1 && value < 11

    })
    protected readonly barNumber!: any;

    @Prop({
        type: Array,
        default: () => []
    })
    protected readonly imgData!: any; // 格式[{id:0, src: "url"}]

    protected barWidth = '0';
    protected ownBarNumber = 0; // 计算后得到的列的数量

    protected mounted() {
        this.setBarWidth();
    }

    protected setBarWidth() {
        this.barWidth = `${100 / this.barNumber}%`;
    }

    protected async getAlbumId(id: string) {
        const { data } = await getAllContext({
            format: 'json',
            nojsoncallback: 1,
            photo_id: id
        });
        if (data) {
            if (data.stat === 'ok') {
                this.$nextTick(() => {
                    this.goToAlbum(data.set[0].id);
                });
            }
            // this.allData = data;
            // data.photos.photo.forEach((item: any) => {
            //     this.imgData.push({
            //         id: item.id,
            //         src: item.url_o
            //     });
            // });
            // loading.close();
        }
    }

    protected goToAlbum(id: string) {
        this.$router.push({
            name: 'Album',
            query: {
                id
            }
        });
    }
}
</script>
<style scoped lang="scss">
    * {
        border: 0;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container {
        width: 100%;
    }
    .cascade-page {
        margin: 0 auto;
        // background-color: #FFF;
        overflow: hidden;
    }
    .cascade-bar {
        padding: 0px 1px;
        padding-bottom: 0px;
        float: left;
    }
    .cascade-bar-content {
        width: 100%;
    }
    .img-block {
        width: 100%;
        margin: -3px 0px;
        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }
    }
</style>
