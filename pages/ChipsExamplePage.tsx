import { Chip, createStyles } from '@mantine/core';
import { useEffect, useState } from "react";
import ChipsExample from '../frontend/components/ChipsExample';
function ChipsExamplePage() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
      <a>testing ChipsExamplePage .........</a>
        <ChipsExample></ChipsExample>
    </div>
  );
}

export default ChipsExamplePage;

