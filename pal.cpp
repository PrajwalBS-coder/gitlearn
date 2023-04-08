#include<iostream>
using namespace std;
 void isPalindrome(int x) {
    int rm,rev=0;
    while(x!=0)
    {
        rm=x%10;
        rev=rev*10+rm;
        x=x/10;

    }
    cout<<rev;
 }
int main()
{
int 
x=131;
isPalindrome(x);

}