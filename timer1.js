const alarm = (seconds) => {
  setTimeout(() => {
    process.stdout.write('\x07 Alarm! \n');
  }, seconds * 1000);
};

const argv = function() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`No input. Please enter a positive integer`);
  }
  
  args.forEach((arg) => {
    const seconds = parseInt(arg, 10);
    if (isNaN(seconds)) {
      console.log(`Invalid input. Enter integer only`);
    }
    if (seconds < 0) {
      console.log(`Invalid input. Enter positive integer only`);
    }
    alarm(seconds);
  });
};

argv();