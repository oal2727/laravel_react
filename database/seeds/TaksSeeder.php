<?php

use Illuminate\Database\Seeder;
use App\Task;
class TaksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $task = new Task();
        $task->nombre="task 1";
        $task->description="descripcion 1";
        $task->save();


        $task1 = new Task();
        $task1->nombre="Task 2";
        $task1->description="descripcion 2";
        $task1->save();

        $task2 = new Task();
        $task2->nombre="Task 3";
        $task2->description="descripcion sobre laravel with react";
        $task2->save();
    }
}
