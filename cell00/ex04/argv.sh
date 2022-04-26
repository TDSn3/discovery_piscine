for param in "$@"
    do
        echo $param
done
if [ -z $param ]
then
    echo "No arguments supplied"
fi