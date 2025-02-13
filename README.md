# cls-bem

BEM class names utility

## Usage

Create a block scope

```ts
import { bem } from "cls-bem";

const cls = bem("my-block");
```

Apply block class name

```ts
cls(); // my-block
```

Apply element class name

```ts
cls("__element"); // my-block__element
```

Apply modifier class name

```ts
cls("--modifier"); // my-block my-block--modifier
```

Apply element and modifier class names

```ts
cls("__element", "--modifier"); // my-block__element my-block__element--modifier
```

## Example

```tsx
const cls = bem("user-card");

<div class={cls()}>
  <img class={cls("__avatar")} />
  <span class={cls("__name", isOnline && "--online")}></span>
</div>;
```

```scss
.user-card {
  &__avatar {
  }

  &__name {
    &--online {
    }
  }
}
```

```css
.user-card {
}

.user-card__avatar {
}

.user-card__name {
}

.user-card__name--online {
}
```
