<template>
    <div class="user-menu-container">

        <!-- name and role -->
        <div class=" user-detail user-menu__item">
            <Icon class="user-detail__userpic" icon="mingcute:user-4-fill" color="#424141" width="28" height="28" />
            <div class="user-detail__info">
                <p>Jan Musílek</p>
                <p class="role">admin</p>
            </div>
        </div>

        <!-- logout button -->
        <div class="logout-btn user-menu__item">
            <Icon class="logout-btn__img" icon="ic:twotone-exit-to-app" color="#424141" width="28" height="28" />
            <p>Logout</p>
        </div>

    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

</script>

<style lang="scss" scoped>
@mixin flexCol {
    display: flex;
    flex-direction: column;
    justify-content: center;
    //align-items: flex-start;
}

.user-menu-container {
    @include flexCol();
    width: 350px;
    height: 150px;
    position: absolute;
    top: 45px;
    right: 10px;
    z-index: 2;
    box-shadow: 0 0 10px 0 rgba(128, 128, 128, 0.606);

    .user-menu__item {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 20px;
        background-color: #fff;
    }

    .user-detail {

        border-bottom: solid 1px lightgray;

        &__userpic {
            margin-right: 20px;
        }

        p {
            color: #4b4949;
        }

        .user-detail__info>.role {
            color: #a6a1a1;
        }
    }

    .logout-btn {
        &__img {
            margin-right: 20px;
        }

        p {
            color: #4b4949;
        }
    }

}
</style>