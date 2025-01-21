import './App.css'

import { Button } from '../lib'

function App() {
  return (
    <div className="flex w-[300px] flex-col gap-2">
      <Button data-testid="button-test-primary">Button primary</Button>
      <Button data-testid="button-test-secondary" variant="secondary">
        Button secondary
      </Button>
      <Button data-testid="button-test-tertiary" variant="tertiary">
        Button tertiary
      </Button>
      <Button data-testid="button-test-disabled" disabled>
        Button disabled
      </Button>
      <Button data-testid="button-test-destructive" color="destructive">
        Button destructive
      </Button>
      <Button data-testid="button-test-editorial" color="editorial">
        Button editorial
      </Button>
      <Button data-testid="button-test-transactional" color="transactional">
        Button transactional
      </Button>
    </div>
  )
}

export default App
