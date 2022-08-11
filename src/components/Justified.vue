<template lang="pug">
    div.justified-frame
        vue-justified-layout(
            :items="imgData"
            v-slot="{item, style, index}"
            :options="{boxSpacing: 2}"
        )
            img.hover-link(
                :src="item.src"
                width="100%"
                @click="imageClick(item.id, item.src)"
            )
        vs-dialog(
            blur
            square
            not-close
            auto-width
            not-padding
            v-model="activePop"
        )
            div.con-image
                img(
                    :src="imgSrc"
                    alt=""
                    width="100%"
                )
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Prop } from 'vue-property-decorator';
import { getAllContext } from '@/api/index';

@Component
export default class Justified extends Vue {
    @Prop({
        type: Boolean,
        default: false
    })
    protected readonly noLink!: boolean;

    @Prop({
        type: Boolean,
        default: false
    })
    protected readonly isPopUp!: boolean;

    @Prop({
        type: Array,
        default: () => []
    })
    protected readonly imgData!: any; // 格式[{id:0, src: "url"}]

    protected activePop = false;

    protected imgSrc = '';

    protected imageClick(id: string, src: string) {
        if (this.noLink) {
            this.activePop = !this.activePop;
            this.imgSrc = src;
            return;
        }
        this.getAlbumId(id);
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
<style scoped lang="scss" scoped>
    .justified-frame{
        width: 80%;
        margin: 0 auto;
    }
    .hover-link {
        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }
    }
    .vs-dialog-content /deep/{
        .vs-dialog {
            background: none;
        }
    }
</style>
