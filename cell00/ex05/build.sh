for param in "$@"
    do
        mkdir ex$param
done
if [ -z $param ]
then
    echo "No arguments supplied"
fi 
