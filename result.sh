echo "enter maths marks"
read maths
echo "enter english marks"
read english
echo "enter network marks"
read network
echo "enter html marks"
read html
echo "enter java marks"
read java

if [ "$maths" -gt 33 ] && [ "$english" -gt 33 ]; then
  echo "pass"
else 
  echo "fail"
        fi
