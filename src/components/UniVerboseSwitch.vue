<template>
    <div class="slider-container">
        <label class="switch">
            <input type="checkbox">
            <span class="slider"></span>
        </label>
        <span>Verbose view</span>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.slider-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 170px;
    margin: 10px 5px 10px 10px;
    color: #7d7b7b;


    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;

        input {
            opacity: 0;
            width: 0;
            height: 0;

            &:checked+.slider {
                background-color: #61afee;
            }

            &:focus+.slider {
                box-shadow: 0 0 1px #2196F3;
            }
        }

        .slider {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            cursor: pointer;
            -webkit-transition: .4s;
            transition: .4s;
            border-radius: 34px;

            &:before {
                border-radius: 50%;
                position: absolute;
                content: "";
                height: 26px;
                width: 26px;
                left: 4px;
                bottom: 4px;
                background-color: white;
                -webkit-transition: .4s;
                transition: .4s;
            }
        }

        input:checked+.slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }
    }
}
</style>