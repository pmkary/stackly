# Stackly
## What the hell is this?
Okay okay it's easy to expalin: stackly is like nothing you've EVER seen (the marketing version...)! but the right one: Have it ever happened to you that you're doing something and then a new activity pops up and you have to do that and when you finish it you start wondering what the hell I was doing before it? Okay as programmers we know that the best answer to this is a stack... and well stackly is exactly a stack that you use to say what you were doing!

## How to install it?
```
% npm install -g stackly
```

## And then how?
Imagine you're doing activity A, you have to say that to stably buy pushing to it's stack:
```
% stackly push
```
Let's you add to the stack, Now activity B happens, You push the B to the stack and then you do the B, when the B is done you do:
```
% stackly pop
```
And then you use the stackly command without any args:
```
% stackly
```
to see what you were doing. And it gives you a stack as:
```
% stackly

 1 ✣ A

```
And then you know that you have to do A.
Just that simple.

And if you wanted to reset the whole thing use:
```
% stackly clean
```
