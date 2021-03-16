#include <iostream>

using namespace std;

int main()
{ 
    int n = 1,s = 0;
    while (s<= 365) {
        s = s + 36;
        n = n * 2;
    }
    cout << n;
    
    return 0;
}