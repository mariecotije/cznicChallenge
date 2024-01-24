<template>
    <div class="domain-container">
        <!-- domain name -->
        <h1>{{ data.fqdn }}</h1>
        <!-- switch toggle -->
        <ToggleVerbose @click="toggleVerbose" />


        <!-- details loaded -->
        <div class="details-container">

            <div class="cards-bigger">

                <!-- auth info hidden data, on click show secret password -->
                <div class="auth-info card">
                    <div class="auth-info__hidden">
                        <p>AuthInfo: </p>
                        <button v-if="!showPassword" @click="showPassword = !showPassword">show</button>
                        <p v-if="showPassword">secret password</p>
                        <button v-if="showPassword" @click="showPassword = !showPassword">hide</button>
                    </div>
                    <div class="auth-info__expiration">
                        <p>Expires at: </p>
                        <p class="fetched">{{ convertedTimestampEvents.expires_at }}</p>
                    </div>
                </div>

                <div class="events card">
                    <h2 class="card__title">Events</h2>
                    <div class="card__data">
                        <div class="card__data_tags">
                            <p>Create date: </p>
                            <p>Update date:</p>
                            <p>Transfer date:</p>
                            <p>Delete date:</p>
                            <p>Registrar:</p>
                            <p>Registrar:</p>
                            <p>Registrar:</p>
                        </div>

                        <div class="card__data_fetched">
                            <p>{{ convertedTimestampEvents.registered }}</p>
                            <p>{{ convertedTimestampEvents.updated }}</p>
                            <p>{{ convertedTimestampEvents.transferred }}</p>
                            <p>{{ data.events.unregistered ? new Date(data.events.unregistered.timestamp).toLocaleString() :
                                'still active' }}</p>
                            <p class="highlighted">{{ data.events.registered.registrar_handle }}</p>
                            <p class="highlighted">{{ data.events.transferred.registrar_handle }}</p>
                            <p class="highlighted">{{ data.events.updated.registrar_handle }}</p>
                        </div>

                    </div>
                </div>



                <div class="flags card">

                    <h2 class="card__title">State flags:</h2>
                    <div class="card__data_fetched">
                        <p class="activeFlag" v-for="(flag, index) in activeFlags" :key="index">
                            <Icon icon="carbon:checkmark-filled" color="#3bb91f" /> {{ flag.description }}
                        </p>
                        <div v-show="showVerbose">
                            <p class="inactiveFlag" v-for="(flag, index) in inactiveFlags" :key="index">
                                <Icon icon="charm:circle-cross" color="red" /> {{ flag.description }}
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="cards-small">

                <div class="owner card">

                    <h2 class="card__title">Owner:</h2>
                    <div class="card__data">
                        <div class="card__data_tags">
                            <p>Handle: </p>
                            <p>Organization: </p>
                            <p>Handle: </p>
                        </div>

                        <div class="card__data_fetched">
                            <p class="highlighted">{{ data.owner.handle }}</p>
                            <p>{{ data.owner.organization }}</p>
                            <p>{{ data.owner.name }}</p>
                        </div>
                    </div>

                </div>
                <div class="administrative-contact">

                    <div v-if="!showVerbose" class="card">
                        <h2 class="card__title">Administrative contacts:</h2>
                        <div class="card__data">
                            <div class="card__data_tags">
                                <p v-for="(contact, index) in administrative_contacts" :key="index">{{ contact.name }}:</p>
                            </div>
                            <div class="card__data_fetched">
                                <p class="highlighted" v-for="(contact, index) in administrative_contacts" :key="index">{{
                                    contact.handle }}</p>
                            </div>
                        </div>

                    </div>

                    <div v-show="showVerbose" class="card" v-for="(contact, index) in administrative_contacts" :key="index">
                        <h2 class="card__title">Administrative contact:</h2>
                        <div class="card__data">
                            <div class="card__data_tags">
                                <p>Handle: </p>
                                <p>Organization: </p>
                                <p>Handle: </p>
                            </div>

                            <div class="card__data_fetched">
                                <p class="highlighted">{{ contact.handle }}</p>
                                <p>{{ contact.organization }}</p>
                                <p>{{ contact.name }}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="nsset card">

                    <div class="card__title">NSSet:</div>
                    <div class="card__data">
                        <div class="card__data_tags">
                            <p>Handle: </p>
                            <p>Registrar: </p>
                            <p>DNS: </p>
                        </div>

                        <div class="card__data_fetched">
                            <p class="highlighted">{{ data.nsset.handle }}</p>
                            <p class="highlighted">{{ data.nsset.registrar }}</p>
                            <div v-for="(dns, index) in data.nsset.dns" :key="index">
                                {{ dns.name }} ({{ dns.ip_address }}) </div>
                        </div>

                    </div>
                </div>
                <div class="keyset card">

                    <div class="card__title">KeySet</div>
                    <div class="card__data">
                        <div class="card__data_tags">
                            <p>Handle: </p>
                            <p>Registrar: </p>
                            <p>DNS keys: </p>
                        </div>

                        <div class="card__data_fetched">
                            <p class="highlighted">{{ data.keyset.handle }}</p>
                            <p class="highlighted">{{ data.keyset.registrar }}</p>
                            <div v-for="(keysetdns, index) in data.keyset.dns_keys" :key="index">
                                {{ keysetdns }}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { convertTimestamp } from '../timestampConverter';
//import UniVerboseSwitch from './UniVerboseSwitch.vue';
import ToggleVerbose from './ToggleVerbose.vue';

const { data } = defineProps(['data']);

const showPassword = ref(false);

const showVerbose = ref(false);
const toggleVerbose = () => {
    showVerbose.value = !showVerbose.value;
};


const flags = data.state_flags.flags;
const activeFlags = flags.filter((flag) => flag.active === true);
const inactiveFlags = flags.filter((flag) => flag.active === false);

const administrative_contacts = data.administrative_contacts;

const convertedTimestampEvents = {
    expires_at: convertTimestamp(data.expires_at),
    registered: convertTimestamp(data.events.registered.timestamp),
    updated: convertTimestamp(data.events.updated.timestamp),
    transferred: convertTimestamp(data.events.transferred.timestamp),
};


</script>

<style lang="scss" scoped>
.domain-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 30px;
    margin: 0;
    flex-grow: 1;
    width: 80%;
    border-left: 1px solid #d7d3d3;
    background-color: #f5f5f5;

    h1 {
        margin: 0;
        padding: 0;
        font-size: 1.5rem;
        font-weight: 500;
    }

    .highlighted {
        color: #4586f6;
    }

    .activeFlag {
        color: #3bb91f;

    }

    .inactiveFlag {
        color: red;
    }


    .details-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;


        @media (max-width: 780px) {
            flex-direction: column;

        }

        .cards-bigger {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            min-width: 55%;
            margin-right: 1rem;


            .auth-info {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                width: 100%;
                height: 6rem;
                padding: 10px;
                padding-right: 60px;
                background-color: #fff;
                border-radius: 4px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

                &__hidden {
                    //display: flex;
                    width: 1rem;
                    height: 50%;
                    margin-bottom: 20px;


                    button {
                        margin: 0 10px;
                        padding: 5px 10px;
                        border-radius: 4px;
                        border: none;
                        background-color: #4586f6;
                        color: #fff;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                        text-transform: uppercase;
                        cursor: pointer;
                    }
                }

                .auth-info__hidden {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 60%;
                    margin-bottom: 20px;
                }

                .auth-info__expiration {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 60%;

                    .fetched {
                        font-weight: 300;
                    }
                }
            }

        }
    }

    .cards-small {
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        min-width: 35%;
    }

    .administrative-contact {
        width: 100%;
    }

    .card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        margin: 20px 0;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        font-size: 14px;

        &__title {
            margin: 0;
            padding: 10px;
            font-size: 1rem;
            font-weight: 500;
            width: 100%;
            height: 40px;
            background-color: rgb(210, 204, 204);
        }

        &__data {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 10px;
            background-color: #fff;
            font-weight: 200;


            &_tags {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                width: 30%;
                height: 100%;
                font-weight: 500;
                padding-left: 5px;

                p {
                    padding: 8px 0;
                }
            }

            &_fetched {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                width: 70%;
                padding: 5px 0;

                p {
                    padding: 8px 0 8px 10px;
                }

            }
        }

    }
}
</style>