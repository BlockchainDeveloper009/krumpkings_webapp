import { Chip, createStyles } from '@mantine/core';
import { useEffect, useState } from "react";
function ApplicationContainer() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
      <a>testing app container.........</a>
    <Chip.Group position="center" multiple defaultValue={['react']}>
      ggggggggggggggg
      {/* <Chip classNames={classes} value="react">React</Chip>
      <Chip classNames={classes} value="ng">Angular</Chip>
      <Chip classNames={classes} value="vue">Vue</Chip>
      <Chip classNames={classes} value="svelte">Svelte</Chip> */}
    </Chip.Group>

    </div>
  );
}

export default ApplicationContainer;

