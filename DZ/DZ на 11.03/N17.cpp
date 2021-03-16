#include <iostream>

using namespace std;

int main()
{
    int count = 0, min = 2000000, max = 0;
    for (int i = 15; i <= 2000000; i *= 2){
        int a[10]={0}, x = i;
        bool sDigit = false;
        while (x != 0){
            int y = x % 10;
            a[y]++;
            x /= 10;
        }
        
        for (int j = 0; j < 10; j++){
            if (a[j] >= 2){
                sDigit = true;
            }
        }
        if (sDigit){
            count++;
            max = i;
            if (i < min){
                min = i;
            }
        }
    }
    
    cout << count << ' ' << max - min;
    
    return 0;
}