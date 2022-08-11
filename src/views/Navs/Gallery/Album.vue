<template lang="pug">
    div.album
        transition(
            name="fade-transform"
            mode="out-in"
        )
            Justified(
                v-if="isShow"
                :imgData="rawData"
                :noLink="true"
            )
        div.center.con-pagination(v-if="pageLength !== 1")
            vs-pagination(
                color="dark"
                v-model="currentPage"
                :length="pageLength"
            )
        //- div.card-wrap.clearfix
        //-     vs-card(
        //-         type="2"
        //-         v-for="item in rawData.photo"
        //-         :key="item.id"
        //-     )
        //-         template(#title)
        //-             h3 {{ item.title }}
        //-         template(#img)
        //-             img(:src="item.url_o" alt="")
        //-         template(#text)
        //-             p {{ item.title }}
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { getAlbumPhotoList } from '@/api';
import Justified from '@/components/Justified.vue';

@Component({
    components: {
        Justified
    }
})
export default class Album extends Vue {
    protected rawData: any = [];

    protected totalPage = 1;

    protected currentPage = 1;

    protected perPage = 10;

    protected pageLength = 1;

    protected isShow = false;

    protected created() {
        this.getAlbumPhotoListGo(1);
    }

    protected async getAlbumPhotoListGo(page: number) {
        this.isShow = false;
        const route = this.$route.query;
        const { data } = await getAlbumPhotoList({
            photoset_id: route.id,
            extras: 'owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_m, url_o',
            media: 'photo',
            page,
            per_page: this.perPage
        });
        if (data) {
            this.rawData = [];
            data.photoset.photo.forEach((item: any) => {
                this.rawData.push({
                    id: item.id,
                    src: item.url_o,
                    width: item.width_s,
                    height: item.height_s
                });
            });
            this.totalPage = data.photoset.total;
            this.pageLength = Math.ceil(this.totalPage / this.perPage);
            this.isShow = true;
        }
    }

    @Watch('currentPage')
    protected pageChange(val: number) {
        this.getAlbumPhotoListGo(val);
    }
}
</script>
<style scoped lang="scss">
    .album /deep/{
        // width: 100%;
        // height: 100%;
        overflow: auto;
            .card-wrap {
                width: 80%;
                height: 1000px;
                margin: 0 auto;
                .vs-card-content {
                    float: left;
                    width: 20%;
                    height: 20%;
                }
            }
        .center {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            flex-wrap: wrap;
        }
    }
</style>
