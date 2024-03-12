<template>
    <div>
        <Suspense>
<AsyncCityView />
        <template #fallback>
            <p> 
                <CityViewSkeleton />
            </p>
        </template>
</Suspense>
    </div>
</template>

<script setup>
import CityViewSkeleton from '../components/CityViewSkeleton.vue'
import AsyncCityView from '../components/AsyncCityView.vue'
</script>
