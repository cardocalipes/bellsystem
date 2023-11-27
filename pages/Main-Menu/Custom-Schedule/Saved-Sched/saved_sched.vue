<template>
    <div class="header">
        <h1>SAVED SCHEDULES</h1>
    </div>
    <li class="back-button"><NuxtLink to ="/Main-Menu/Custom-Schedule/custom-sched">&#8592; Back</NuxtLink></li>
    <div class="schedule-container">
        <div class="schedule-column" onclick="applySchedule(1)">           
            <tr v-for="row in savedOne" :key="row.sched_name">
               <td>{{ row.sched_name }}</td>
          </tr>
        </div>
        <div class="buttons">
            <button onclick="applyClickedSchedule()">Apply</button>
            <button>Edit</button>
        </div>
    </div>
</template>

<script setup>
const savedOne = ref ();

async function savedSched() {
    const savedSched = await useFetch("/api/savedSchedOne");
    savedOne.value = savedSched.data.value;
}

await savedSched(); 
console.log(savedOne.value)
</script>

<style scoped>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
        }
        .header {
            text-align: center;
            padding: 10px;
            background-color: #333;
            color: #fff;
        }
        .back-button {
            position: absolute;
            top: 10px;
            left: 10px;
        }
        .schedule-container {
            width: 80%;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        .schedule-column {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 5px;
            cursor: pointer;
            display: inline-block;
            width: calc(10% - 10px);
            text-align: center;
            background-color: #f9f9f9;
        }
        .schedule-column:hover {
            background-color: #e0e0e0;
        }
        .buttons {
            text-align: center;
            margin-top: 20px;
        }
</style>