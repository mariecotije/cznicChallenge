<template>
    <header>
        <nav class="nav-container">

            <div class="nav-container__menu-brand">
                <div class="burger-menu">
                    <Icon icon="iconamoon:menu-burger-horizontal-fill" width="30" height="30" />
                </div>
                <div class="branding">

                    <h1>Ferda</h1>
                </div>
            </div>

            <div class="nav-container__user-menu">
                <Icon class="nav-container__user-menu-userpic" icon="mingcute:user-4-fill" color="white" width="28"
                    height="28" />
                <div class="nav-container__user-menu-username">JAN MUSÍLEK</div>
            </div>

        </nav>
    </header>
</template>

<script setup>
import { Icon } from '@iconify/vue';

</script>

<style lang="scss" scoped>
header {
    background-color: #4586f6;
    color: white;


    .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;

        &__menu-brand {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 25px;

            .burger-menu {
                padding-right: 25px;

            }

            .branding {
                h1 {
                    font-size: 1.3rem;
                    font-weight: 400;
                    padding: 0 3px;
                }
            }
        }

        &__user-menu {
            display: flex;
            align-items: center;

            &-userpic {
                padding: 0px;
            }

            &-username {
                padding-left: 10px;
                font-weight: 300;
            }
        }
    }
}
</style>
