
function show(value){

    if(value)
        console.log(value, 'is true');
    else
        console.log(value, 'is false');
}

show(7>3);
show(true);
show(false);

//some common true values
show(29);
show(-1);
show('hello world');
show(new Date());
show([]);
show(new Object());

//some common falsies

show(0);
show('');
show(null);
show(undefined);