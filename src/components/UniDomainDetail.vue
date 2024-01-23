<template>
    <div class="domain-container">
        <!-- domain name -->
        <h1>{{ data.fqdn }}</h1>
        <!-- switch toggle -->
        <UniVerboseSwithch />

        <!-- auth info hidden data, on click show secret password -->
        <div class="auth-info">
            <div class="auth-info__hidden">
                <p>AuthInfo: </p>
                <button>show</button>
                <p>secret password</p>
            </div>
            <div class="auth-info__expiration">
                <p>Expires at: </p>
                <p>{{ data.expires_at }}</p>
            </div>
        </div>

        <!-- detailes loaded -->
        <div class="details-container">

            <div class="cards-bigger">
                <div class="events">
                    <div class="card">
                        <div class="card__title">Events</div>
                        <div class="card__data">
                            <p>Create date: </p>
                            <p>{{ data.events.registered.timestamp }}</p>

                            <p>Update date:</p>
                            <p>{{ data.events.updated.timestamp }}</p>

                            <p>Transfer date:</p>
                            <p>{{ data.events.transferred.timestamp }}</p>

                            <p>Update date:</p>
                            <p>{{ data.events.updated.timestamp }}</p>

                            <p>Delete date:</p>
                            <p>null</p>

                            <p>Registrar:</p>
                            <p>{{ data.events.registered.registrar_handle }}</p>
                            <p>Registrar:</p>
                            <p>{{ data.events.transferred.registrar_handle }}</p>
                            <p>Registrar:</p>
                            <p>{{ data.events.updated.registrar_handle }}</p>


                        </div>
                    </div>
                </div>
                <div class="flags">
                    <div class="card">
                        <div class="card__title">State flags:</div>
                        <div class="card__data">
                            <div v-for="(flag, index) in flags" :key="index">
                                {{ flag.description }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cards-small">

                <div class="owner">
                    <div class="card">
                        <div class="card__title">Owner:</div>
                        <div class="card__data">
                            <p>Handle: </p>
                            <span>{{ data.owner.handle }}</span>
                            <p>Organization: </p>
                            <span>{{ data.owner.organization }}</span>
                            <p>Handle: </p>
                            <span>{{ data.owner.name }}</span>
                        </div>
                    </div>
                </div>
                <div class="administrative-contact verbose">
                    <div class="card">
                        <div v-for="(contact, index) in administrative_contacts" :key="index">
                            <div class="card__title">Administrative contact:</div>
                            <div class="card__data">
                                <p>Handle: </p>
                                <span>{{ contact.handle }}</span>
                                <p>Organization: </p>
                                <span>{{ contact.organization }}</span>
                                <p>Handle: </p>
                                <span>{{ contact.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nsset">
                    <div class="card">
                        <div class="card__title">NSSet:</div>
                        <div class="card__data">
                            <p>Handle: </p>
                            <span>{{ data.nsset.handle }}</span>
                            <p>Registrar: </p>
                            <span>{{ data.nsset.registrar }}</span>
                            <p>DNS: </p>
                            <div v-for="(dns, index) in data.nsset.dns" :key="index">
                                {{ dns.name }} ({{ dns.ip_address }}) </div>
                        </div>
                    </div>
                </div>
                <div class="keyset">
                    <div class="card">
                        <div class="card__title">KeySet</div>
                        <div class="card__data">
                            <p>Handle: </p>
                            <span>{{ data.keyset.handle }}</span>
                            <p>Registrar: </p>
                            <span>{{ data.keyset.registrar }}</span>
                            <p>DNS: </p>
                            <div v-for="(keysetdns, index) in data.keyset.dns" :key="index">
                                {{ keysetdns.name }} ({{ keysetdns.ip_address }})
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
 </template>

<script setup>
import { defineProps } from 'vue';
import UniVerboseSwithch from './UniVerboseSwitch.vue';

const { data } = defineProps(['data']);
console.log('data:', data);

const flags = data.state_flags.flags;
const administrative_contacts = data.administrative_contacts;

</script>

<style lang="scss" scoped>
.domain-container {
    display: flex;
    flex-direction: column;
    flex-grow: 6;
    background-color: #ecebeb;
    border-radius: 4px;
    padding: 20px 40px;
    margin: 0;

    h1 {
        margin: 0;
        padding: 0;
        font-size: 1.5rem;
        font-weight: 500;
    }


    .auth-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        height: 6rem;
        margin: 20px 0;
        padding: 10px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

        &__hidden {
            display: flex;
            justify-content: flex-start;

            //width: 60%;
            height: 50%;
            margin-bottom: 20px;
            background-color: pink;
        }

        .auth-info__hidden {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-bottom: 20px;
        }

        .auth-info__expiration {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }


    }

    .details-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;


        .card {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            //height: 8rem;
            margin: 20px 0;
            //padding: 10px;

            border-radius: 4px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

            &__title {
                margin: 0;
                padding: 0;
                font-size: 1rem;
                font-weight: 500;
                height: 20%;
                background-color: lightgray;
            }

            &__data {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                flex-wrap: wrap;
                height: 100%;
                margin: 0;
                padding: 10px;
                background-color: #fff;
            }
        }
    }
}
</style>