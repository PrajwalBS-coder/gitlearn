#include<iostream>
using namespace std;
void sm(int a[5], int sum)
{
int i,j;
for (i=0;i<6;i++)
 {

    for(j=i+1;j<6;j++)
    {
        if(a[i]+a[j]==sum)
        {
            //return i,j;
            cout<<a[i]<<a[j];
            break;
        }
 }

 }
 }
int main()
{
int n[]={1,2,3,4,5,6};
int sum=8;
sm(n,sum);

//cout<<sizeof(n)/sizeof(n[0]);

}