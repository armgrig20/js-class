// Առաջադրանքների կատարում և ընդհանուր ժամանակի հաշվարկ
// Պետք է գրել ֆունկցիա, որը կատարում է մի քանի առաջադրանք հետևյալ կերպ.
// Առաջադրանքների շղթա:
// Յուրաքանչյուր առաջադրանք կունենա անուն և տևողություն։
// Առաջադրանքները պետք է կատարվեն հերթականությամբ,
//  և յուրաքանչյուր առաջադրանքի ավարտից հետո պետք է տպվի դրա անունը։
// Ընդհանուր ժամանակի հաշվարկ:
// Վերջում պետք է տպվի բոլոր առաջադրանքների ընդհանուր տևողությունը։

// Արդյունքը
// Կոնսոլում պետք է տպվի հետևյալը.
// Առաջադրանք 1
// Առաջադրանք 2
// Առաջադրանք 3
// Ընդհանուր տևողությունը՝ 4500 միլիվայրկյան։


  function runTasksWithTotalTime(tasks) {
    let totalTime = 0;
    let currentTaskIndex = 0;
  
    function runNextTask() {
      if (currentTaskIndex < tasks.length) {
        const task = tasks[currentTaskIndex];
        console.log(task.taskName); 
        totalTime += task.duration; 
        currentTaskIndex++;
  
       
        setTimeout(runNextTask, task.duration);
      } else {
        console.log(`Ընդհանուր տևողությունը՝ ${totalTime} միլիվայրկյան։`);
      }
    }
  
  
    runNextTask();
  }
  
  const tasks = [
    { taskName: "Առաջադրանք 1", duration: 1000 },
    { taskName: "Առաջադրանք 2", duration: 2000 },
    { taskName: "Առաջադրանք 3", duration: 1500 },
  ];
  
  runTasksWithTotalTime(tasks);
  