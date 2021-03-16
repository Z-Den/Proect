#include <iostream>

using namespace std;

int count = 0;

void f (int n){
    count ++;
    if (n >= 1){
        count ++;
        f(n - 1);
        f(n - 2);
    }
}

int main()
{ 
    f(28);
    cout << count;
    
    return 0;
}